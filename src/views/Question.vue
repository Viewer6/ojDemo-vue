<template>
    <el-form inline="true">
        <el-form-item>
            <selector placeholder="请选择题目难度" style="width: 200px;"></selector>
        </el-form-item>
        <el-form-item>
            <el-input placeholder="请您输入要搜索的题目标题" />
        </el-form-item>
        <el-form-item>
            <el-button plain>搜索</el-button>
            <el-button plain type="info">重置</el-button>
            <el-button plain type="primary" :icon="Plus">添加题目</el-button>
        </el-form-item>
    </el-form>
    <el-table height="526px" :data="questionList">
        <el-table-column prop="questionId" width="180px" label="题⽬id" />
        <el-table-column prop="title" label="题⽬标题" />
        <el-table-column prop="difficulty" label="题⽬难度" width="90px">
            <template #default="{ row }">
                <div v-if="row.difficulty === 1" style="color:#3EC8FF;">简单</div>
                <div v-if="row.difficulty === 2" style="color:#FE7909;">中等</div>
                <div v-if="row.difficulty === 3" style="color:#FD4C40;">困难</div>
            </template>
        </el-table-column>
        <el-table-column prop="createName" label="创建⼈" width="140px" />
        <el-table-column prop="createTime" label="创建时间" width="180px" />
        <el-table-column label="操作" width="100px" fixed="right">
            <template #default="{ row }">
                <el-button type="text">编辑
                </el-button>
                <el-button type="text" class="red">删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script setup>
import { Plus } from "@element-plus/icons-vue"
import Selector from "@/components/QuestionSelector.vue"
import { reactive } from 'vue'
const questionList = reactive([
    {
        questionId: '1',
        title: '题⽬1',
        difficulty: 1,
        createName: '超级管理员',
        createTime: '2024-05-30 17:00:00'
    },
    {
        questionId: '2',
        title: '题⽬2',
        difficulty: 2,
        createName: '超级管理员',
        createTime: '2024-05-30 17:00:00'
    },
    {
        questionId: '3',
        title: '题⽬1',
        difficulty: 3,
        createName: '超级管理员',
        createTime: '2024-05-30 17:00:00'
    }
])
</script>
